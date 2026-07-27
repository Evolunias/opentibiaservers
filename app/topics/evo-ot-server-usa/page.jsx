import EvoOtServerUsaKeywordPage, { generateMetadata } from './evo-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerUsaKeywordPage />;
}
