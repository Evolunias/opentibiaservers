import TopMidhemOpenTibiaKeywordPage, { generateMetadata } from './top-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemOpenTibiaKeywordPage />;
}
