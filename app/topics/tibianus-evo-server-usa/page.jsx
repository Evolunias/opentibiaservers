import TibianusEvoServerUsaKeywordPage, { generateMetadata } from './tibianus-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusEvoServerUsaKeywordPage />;
}
