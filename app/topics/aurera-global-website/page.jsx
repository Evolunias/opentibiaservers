import AureraGlobalWebsiteKeywordPage, { generateMetadata } from './aurera-global-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalWebsiteKeywordPage />;
}
