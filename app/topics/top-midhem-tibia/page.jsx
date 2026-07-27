import TopMidhemTibiaKeywordPage, { generateMetadata } from './top-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemTibiaKeywordPage />;
}
