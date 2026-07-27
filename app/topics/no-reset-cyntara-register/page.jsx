import NoResetCyntaraRegisterKeywordPage, { generateMetadata } from './no-reset-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraRegisterKeywordPage />;
}
