import CoxaotCommandsKeywordPage, { generateMetadata } from './coxaot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotCommandsKeywordPage />;
}
