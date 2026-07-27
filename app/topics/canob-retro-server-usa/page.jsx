import CanobRetroServerUsaKeywordPage, { generateMetadata } from './canob-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRetroServerUsaKeywordPage />;
}
