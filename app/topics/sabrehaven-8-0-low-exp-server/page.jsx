import Sabrehaven80LowExpServerKeywordPage, { generateMetadata } from './sabrehaven-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven80LowExpServerKeywordPage />;
}
