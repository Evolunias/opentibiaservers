import Sabrehaven14EvoServerKeywordPage, { generateMetadata } from './sabrehaven-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14EvoServerKeywordPage />;
}
