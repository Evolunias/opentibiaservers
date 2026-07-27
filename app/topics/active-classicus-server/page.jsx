import ActiveClassicusServerKeywordPage, { generateMetadata } from './active-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusServerKeywordPage />;
}
