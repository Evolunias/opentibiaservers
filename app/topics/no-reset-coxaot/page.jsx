import NoResetCoxaotKeywordPage, { generateMetadata } from './no-reset-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotKeywordPage />;
}
