import Sabrehaven11LowExpServerKeywordPage, { generateMetadata } from './sabrehaven-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11LowExpServerKeywordPage />;
}
