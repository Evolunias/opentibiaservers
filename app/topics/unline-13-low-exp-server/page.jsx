import Unline13LowExpServerKeywordPage, { generateMetadata } from './unline-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13LowExpServerKeywordPage />;
}
