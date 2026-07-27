import HighrateMidhemOpenTibiaKeywordPage, { generateMetadata } from './highrate-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemOpenTibiaKeywordPage />;
}
