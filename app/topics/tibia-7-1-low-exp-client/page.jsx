import Tibia71LowExpClientKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpClientKeywordPage />;
}
