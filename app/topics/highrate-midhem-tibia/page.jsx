import HighrateMidhemTibiaKeywordPage, { generateMetadata } from './highrate-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemTibiaKeywordPage />;
}
