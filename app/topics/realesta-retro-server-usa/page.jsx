import RealestaRetroServerUsaKeywordPage, { generateMetadata } from './realesta-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRetroServerUsaKeywordPage />;
}
