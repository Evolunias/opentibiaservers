import NewMidhemTibiaKeywordPage, { generateMetadata } from './new-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemTibiaKeywordPage />;
}
