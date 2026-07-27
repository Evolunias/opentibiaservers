import Sabrehaven13LowExpServerKeywordPage, { generateMetadata } from './sabrehaven-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13LowExpServerKeywordPage />;
}
