import PremiaTibiaKeywordPage, { generateMetadata } from './premia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaTibiaKeywordPage />;
}
