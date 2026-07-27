import LowrateMistOfDeathWebsiteKeywordPage, { generateMetadata } from './lowrate-mist-of-death-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMistOfDeathWebsiteKeywordPage />;
}
