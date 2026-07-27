import ActiveEvoluniaWebsiteKeywordPage, { generateMetadata } from './active-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaWebsiteKeywordPage />;
}
