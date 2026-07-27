import Tibijka11NoResetServerKeywordPage, { generateMetadata } from './tibijka-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11NoResetServerKeywordPage />;
}
