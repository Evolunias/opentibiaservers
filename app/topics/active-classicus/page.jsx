import ActiveClassicusKeywordPage, { generateMetadata } from './active-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusKeywordPage />;
}
