import PvpCoxaotServerKeywordPage, { generateMetadata } from './pvp-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpCoxaotServerKeywordPage />;
}
