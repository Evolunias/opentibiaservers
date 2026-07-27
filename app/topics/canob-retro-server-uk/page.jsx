import CanobRetroServerUkKeywordPage, { generateMetadata } from './canob-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRetroServerUkKeywordPage />;
}
