import NonPvpThorniaServerKeywordPage, { generateMetadata } from './non-pvp-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpThorniaServerKeywordPage />;
}
