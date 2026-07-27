import NoResetCoxaotPrivateServerKeywordPage, { generateMetadata } from './no-reset-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotPrivateServerKeywordPage />;
}
