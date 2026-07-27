import RubinotResetKeywordPage, { generateMetadata } from './rubinot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotResetKeywordPage />;
}
