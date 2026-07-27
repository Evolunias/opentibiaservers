import Tibia15LowExpClientKeywordPage, { generateMetadata } from './tibia-15-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpClientKeywordPage />;
}
