import CurrentMidhemTibiaKeywordPage, { generateMetadata } from './current-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemTibiaKeywordPage />;
}
