import IridiaTibiaKeywordPage, { generateMetadata } from './iridia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaTibiaKeywordPage />;
}
