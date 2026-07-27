import LowrateEvoluniaWebsiteKeywordPage, { generateMetadata } from './lowrate-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaWebsiteKeywordPage />;
}
