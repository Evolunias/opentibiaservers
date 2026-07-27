import NonPvpEvoluniaServerKeywordPage, { generateMetadata } from './non-pvp-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpEvoluniaServerKeywordPage />;
}
