import Tibia13LowExpServerKeywordPage, { generateMetadata } from './tibia-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpServerKeywordPage />;
}
