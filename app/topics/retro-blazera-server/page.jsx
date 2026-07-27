import RetroBlazeraServerKeywordPage, { generateMetadata } from './retro-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroBlazeraServerKeywordPage />;
}
