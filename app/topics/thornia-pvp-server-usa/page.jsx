import ThorniaPvpServerUsaKeywordPage, { generateMetadata } from './thornia-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPvpServerUsaKeywordPage />;
}
