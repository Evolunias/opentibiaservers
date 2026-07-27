import RubinotNoResetServerUsaKeywordPage, { generateMetadata } from './rubinot-no-reset-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotNoResetServerUsaKeywordPage />;
}
