import RubinotGermanyServersKeywordPage, { generateMetadata } from './rubinot-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotGermanyServersKeywordPage />;
}
