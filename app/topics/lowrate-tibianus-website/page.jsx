import LowrateTibianusWebsiteKeywordPage, { generateMetadata } from './lowrate-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusWebsiteKeywordPage />;
}
