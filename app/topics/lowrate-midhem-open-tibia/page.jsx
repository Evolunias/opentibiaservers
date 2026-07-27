import LowrateMidhemOpenTibiaKeywordPage, { generateMetadata } from './lowrate-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemOpenTibiaKeywordPage />;
}
