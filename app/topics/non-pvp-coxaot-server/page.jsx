import NonPvpCoxaotServerKeywordPage, { generateMetadata } from './non-pvp-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpCoxaotServerKeywordPage />;
}
