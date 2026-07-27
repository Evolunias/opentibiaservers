import PvpeEvoluniaServerKeywordPage, { generateMetadata } from './pvpe-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeEvoluniaServerKeywordPage />;
}
