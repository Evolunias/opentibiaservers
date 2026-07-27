import Sabrehaven12LowExpServerKeywordPage, { generateMetadata } from './sabrehaven-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12LowExpServerKeywordPage />;
}
