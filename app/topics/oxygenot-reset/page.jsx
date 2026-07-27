import OxygenotResetKeywordPage, { generateMetadata } from './oxygenot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotResetKeywordPage />;
}
