import Tibia13LowExpClientKeywordPage, { generateMetadata } from './tibia-13-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpClientKeywordPage />;
}
