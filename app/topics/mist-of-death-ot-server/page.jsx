import MistOfDeathOtServerKeywordPage, { generateMetadata } from './mist-of-death-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathOtServerKeywordPage />;
}
