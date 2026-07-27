import PvpeCoxaotServerKeywordPage, { generateMetadata } from './pvpe-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeCoxaotServerKeywordPage />;
}
