import LowrateMidhemTibiaKeywordPage, { generateMetadata } from './lowrate-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemTibiaKeywordPage />;
}
