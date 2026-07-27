import IridiaTibiaWorldKeywordPage, { generateMetadata } from './iridia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaTibiaWorldKeywordPage />;
}
