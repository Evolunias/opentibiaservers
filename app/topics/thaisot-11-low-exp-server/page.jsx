import Thaisot11LowExpServerKeywordPage, { generateMetadata } from './thaisot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11LowExpServerKeywordPage />;
}
