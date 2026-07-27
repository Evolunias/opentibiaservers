import EvoleraPvpServerUsaKeywordPage, { generateMetadata } from './evolera-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPvpServerUsaKeywordPage />;
}
